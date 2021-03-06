import React,{useState,useEffect} from "react";
import {Container, Menu, Grid, Icon, Label} from "semantic-ui-react"
import Link from "next/link";
import BasicModal from "../../Modal/BasicModal"
import Auth from "../../Auth"
import useAuth from "../../../hooks/useAuth";
import {getMeApi} from "../../../api/user";

export default function MenuWeb() {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("Iniciar Sesión");
    const [user, setUser] = useState(undefined);
    const {auth,logout} = useAuth();

    useEffect(() => {
        (async () => {
            const response = await getMeApi(logout);
            setUser(response);
            console.log(response);

        })();
    }, []);

    const onShowModal = () => setShowModal(true);
    const onCloseModal = () => setShowModal(false);


    return (
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column className="menu__left" width={6}>
                        <MenuPlatform/>
                    </Grid.Column>
                    <Grid.Column className="menu__right" width={10}>
                        {auth ? (<button onClick={logout}>Cerrar Sesión</button>
                        ) : (<MenuOption onShowModal={onShowModal}/>
                        )}
                    </Grid.Column>
                </Grid>
            </Container>
            <BasicModal 
                show={showModal} 
                setShow={setShowModal} 
                title={titleModal}
                size="small">
                <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal}/>
            </BasicModal>
        </div>
    )
}

function MenuPlatform(){
    return(
        <Menu>
            <Link href="/play-station">
                 <Menu.Item>PlayStation</Menu.Item>
            </Link>
            <Link href="/xbox">
                 <Menu.Item>Xbox</Menu.Item>
            </Link>
            <Link href="/switch">
                 <Menu.Item>Switch</Menu.Item>
            </Link>
        </Menu>
    )
}

function MenuOption(props){
    const { onShowModal } = props;

    return(
        <Menu>
            <Menu.Item onClick={onShowModal}>
                <Icon name="user outline" />
                Mi cuenta
            </Menu.Item>
        </Menu>
    )
}
