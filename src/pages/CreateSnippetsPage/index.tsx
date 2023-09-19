import {BreadCrumbs} from "@/components/BreadCrumbs";
import {ContentLayout} from "@/components/ContentLayout";
import EditableText from "@/components/EditableText";

const CreateSnippetsPage = () => {
    const crumbsList = [
        {
            id: 1,
            path: '/publicSnippets',
            name: 'publicSnippets',
        },
        {
            id: 2,
            path: '/publicSnippets/newTitle',
            name: 'newTitle',
        },
    ];
 
    return (
        <ContentLayout>
            <BreadCrumbs data={crumbsList}/>

            <EditableText
                value={'NewTitle'}
                onChange={()=>{
                console.log('bla')}}
                disabled={false}/>
        </ContentLayout>
    );
};

export default CreateSnippetsPage;