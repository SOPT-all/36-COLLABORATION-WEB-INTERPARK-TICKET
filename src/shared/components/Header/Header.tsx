import type { ReactHTMLElement } from 'react'
import * as styles from './'Header.css';

interface Props extends React.HTMLProps<HTMLDivElement> {
  title : React.ReactNode;
  onBackClick? : () => void;
  onCloseClick? : () => void;
}

const Header= ({ title, onBackClick, onCloseClick, ...props }: Props) =>{
    return (
        <div>
            <div></div>
            <div>연극프라이드</div>
            <div></div>
        </div>
    )
}
