"use client"
import { useEffect, useState } from "react"
import { LeftContainer, NavbarContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarLinkExtended, RightContainer } from "./style"
import axios, { AxiosError } from "axios"

interface ICategoria {
    id: number,
    nome: string
}

export const Menu = () => {

    const [categorias, setCategorias] = useState<Array<ICategoria>>([]);

    useEffect(() => {

        axios.get('http://localhost:3001/categorias')
            .then((res) => {
                // Quando é array é bom tipar e definir o estado como um Array vazio
                setCategorias(res.data)
            })
            .catch((err: AxiosError) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <NavbarContainer>
                <NavbarInnerContainer>
                    <LeftContainer>
                        <NavbarLinkContainer>
                            <NavbarLinkExtended href={'/'} style={{ color: '#fff' }}>
                                Americanos
                            </NavbarLinkExtended>
                            <NavbarLink href={'/'}>
                                Home
                            </NavbarLink>

                            { // menu dinâmico com todas as categorías no banco
                                categorias.map((categoria) => (
                                    <NavbarLink
                                        key={categoria.id}
                                        href={`/categoria/${categoria.id}`}
                                    >
                                        {categoria.nome}
                                    </NavbarLink>
                                ))
                            }

                        </NavbarLinkContainer>
                    </LeftContainer>
                    <RightContainer>
                        <NavbarLinkExtended href={'/carrinho'}>
                            Car
                        </NavbarLinkExtended>
                    </RightContainer>
                </NavbarInnerContainer>
            </NavbarContainer>
        </>
    )
}