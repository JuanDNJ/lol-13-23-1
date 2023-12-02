import MainMenu from "@/components/MainMenu";
import Grid from "../../components/Grid";
import MainHeader from "../../components/MainHeader";
import Page from "../../components/Page";

const Index = () => {
    return (
        <Grid>
            <MainHeader>
                <h2 className="subtitle">Home</h2>
                <MainMenu />
            </MainHeader>
            <Page>
                <h1 className="mainTitle">Welcome App LOL</h1>
                <p>
                    Ea laborum irure non consequat excepteur aliqua fugiat ex veniam sit incididunt aute qui.
                    Consectetur cupidatat esse ex incididunt sit aute. Deserunt magna proident exercitation anim laboris.
                    Non consequat incididunt proident tempor elit et amet.
                    Minim aliqua tempor duis deserunt proident in cillum reprehenderit mollit laborum.
                    Cupidatat deserunt dolore sit aliquip Lorem sit aliquip ipsum dolor qui.
                    Incididunt nostrud est sunt adipisicing est dolore reprehenderit et proident elit aliqua reprehenderit voluptate.
                </p>
            </Page>
        </Grid>

    )
}

export default Index;