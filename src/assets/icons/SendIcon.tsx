import { PropsIcons } from "./interfacesIcons"

const SendIcon = ({ classes, color, handleClick }: PropsIcons) => {
    return (
        <svg onClick={handleClick} className={`w-5 h-5 ${classes}`} version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill={color || "#000000"} stroke="none">
                <path d="M4450 4406 c-36 -13 -965 -369 -2064 -790 -1232 -472 -2008 -774
       -2023 -788 -31 -29 -47 -87 -39 -134 16 -81 21 -83 598 -278 440 -149 529
       -176 547 -167 11 7 139 84 283 173 145 88 690 422 1212 741 974 595 981 598
       981 541 0 -12 -322 -315 -907 -854 -499 -459 -918 -846 -932 -860 -23 -25 -24
       -35 -57 -502 -23 -336 -30 -486 -23 -505 11 -33 55 -57 86 -47 12 3 152 134
       312 290 160 156 294 284 298 284 5 0 242 -176 526 -392 284 -216 533 -401 552
       -411 76 -40 186 -8 239 68 17 25 106 414 391 1710 204 923 370 1692 370 1708
       0 60 -24 111 -75 162 -78 79 -157 93 -275 51z"/>
            </g>
        </svg>
    )
}

export default SendIcon