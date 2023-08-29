job("Run npm build and publish files") {
    container(displayName = "Run build and publish script", image = "node:20") {
        env["REGISTRY"] = "https://files.pkg.jetbrains.space/tperformer/p/main/landing/tperformer_frontend/"
        env["TOKEN"] = "{{ project:token-file-registry }}"
        //env["CLIENTID"] = "$JB_SPACE_CLIENT_ID"
        //env["CLIENTSECRET"] = "$JB_SPACE_CLIENT_SECRET"
        //env["EXECNUMBER"] = "{{run:number}}"
        shellScript {
            interpreter = "/bin/sh"
            content = """
                apt update && apt install zip curl -y
                echo "Install npm dependencies..."
                export NODE_ENV=production 
                npm ci
                echo "Start build..."
                npm run build 
                echo "Run publishing..."
                cd dist
                zip -qr tperformer_frontend.zip *
                curl -i \
                    -H "Authorization: Bearer ${'$'}TOKEN" \
                    ${'$'}REGISTRY \
                    --upload-file tperformer_frontend.zip
            """
        }
/*             requirements {
            workerTags("dev")
        } */
    }
}
job("Collect files from filerepo") {
    startOn {
        gitPush {
            anyTag()
        }
    }

    parameters {
        text("url-download","https://files.pkg.jetbrains.space/tperformer/p/main/landing/tperformer_frontend/tperformer_frontend.zip")
        secret("token-read", "{{ project:token-file-registry-read }}")  
    }

    host {
        env["TOKEN"] = "{{ token-read }}"
        env["URL"] = "{{ url-download }}"
        shellScript {
            content = """
                rm -rf /srv/frontend/*
                cd /srv/frontend
                curl -f -L \
                    -H "Authorization: Bearer ${"$"}TOKEN" \
                    ${"$"}URL \
                    --output "tperformer_frontend.zip"
                unzip tperformer_frontend.zip
                rm tperformer_frontend.zip
            """
        }
        
        requirements {
            workerTags("deploy")
        }
    }
}