import styles from './listItem.module.css'

export default async function ListItem () {
    return (
        <>
            <div className={styles.list_item1}>
                <div>A</div>
            </div>
            <div className={styles.list_item2}>List item</div>
            <div className={styles.list_item3}>100+</div>
        </>
    )
}
