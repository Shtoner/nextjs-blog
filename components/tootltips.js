import utilStyles from '../styles/utils.module.css'

export default function Tooltips({children,props}){
    return(
        <div className={utilStyles.tooltip}
        data-size={props}>
                <main>{children}</main>

        </div>
    )
}