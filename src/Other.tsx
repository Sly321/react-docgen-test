import React, { ReactNode } from "react"

export type Props = {
	no: string
    /**
     * ###ldalskd `1234` asd
     *
     * @type {ReactNode}
     * @memberof Props
     */
	children: ReactNode
	yes: string
}

export default function Anything({  }: Props) {
    return <div>content</div>
}

// This file doenst work