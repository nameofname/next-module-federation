import { GetServerSidePropsContext } from "next"
import importMFE from "../../../utils/importMFE";

const SampleMFE = await importMFE();
type PageProps = { data: { test: string; } };

export default function ({ data }: PageProps) {
    return (
        <>
            <p>This is the host application.</p>
            <p>Here is the data from getServerSideProps :</p>
            <code>{JSON.stringify(data)}</code>
            <SampleMFE />
        </>
    )
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const data = {
        test: 'test string'
    };
    return {
        props: { data }
    }
}