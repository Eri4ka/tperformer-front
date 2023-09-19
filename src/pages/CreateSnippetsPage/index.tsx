import {BreadCrumbs} from "@/components/BreadCrumbs";
import {ContentLayout} from "@/components/ContentLayout";
import Header from "@/pages/CreateSnippetsPage/components/Header";
import TextArea from "@/pages/CreateSnippetsPage/components/TextArea";

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
const CreateSnippetsPage = () => {
 
    return (
        <ContentLayout>
            <BreadCrumbs data={crumbsList}/>
            <Header/>
            <TextArea/>


        </ContentLayout>
    );
};

export default CreateSnippetsPage;