import React from 'react'

interface Props {
    classes?: string
    label: string
    link: string
    link_class?: string
    // children: React.ReactNode
    icon: React.ReactNode
}

const LinksComponent = ({ classes, label, link, icon, link_class }: Props) => {
    return (
        <div className={`${classes}`}>
            {icon}
            <a target="_blank" href={link} className={link_class}>{label}</a>
        </div>
    )
}

export default LinksComponent