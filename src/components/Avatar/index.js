import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "profile-avatar.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 60) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        `
    )

    return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />

    // const { avatarImage } = useStaticQuery(
    //     graphql`
    //         query {
    //             avatarImage: file(relativePath: { eq: "profile-avatar.png" }) {
    //                 childImageSharp {
    //                     fluid(maxWidth: 60, maxHeight: 60){
    //                         ...GatsbyImageSharpFluid
    //                     }
    //                 }
    //             }
    //         }
    //     `
    // )

    // return <Img fluid={avatarImage.childImageSharp.fluid} style={{width: 60}} />
}

export default Avatar 