import MainMenu from "@/components/MainMenu";
import { useStore } from "@/context/Store.ctx"

const Index = () => {
    const { userName } = useStore()

    return (
        <>
            <MainMenu />
            <h1>{userName}</h1>
            <p>
                Ea laborum irure non consequat excepteur aliqua fugiat ex veniam sit incididunt aute qui.
                Consectetur cupidatat esse ex incididunt sit aute. Deserunt magna proident exercitation anim laboris.
                Non consequat incididunt proident tempor elit et amet.
                Minim aliqua tempor duis deserunt proident in cillum reprehenderit mollit laborum.
                Cupidatat deserunt dolore sit aliquip Lorem sit aliquip ipsum dolor qui.
                Incididunt nostrud est sunt adipisicing est dolore reprehenderit et proident elit aliqua reprehenderit voluptate.
            </p>
        </>
    )
}

export default Index;