import styles from './page.module.css'
import ListItem from './listItem'

export default async function HomePage () {
    return (
        <section className={styles.home_page_section}>
            <div className={styles.home_content_wrapper}>
                <div className={styles.content_header}>DiploAI</div>
                <div className={styles.content_body}>
                    DiploAI is a tool that helps companies and governments deal
                    with increasing climate complexity and regulatory change, by
                    using GenAI to identify their optimal strategy to achieve a given goal.
                    </div>
                <div className={styles.sub_content}>
                    <div className={styles.sub_content_item}>
                        <ListItem />
                        <input type="checkbox" id="customCheckbox1" className={styles.list_item4} name="myCheckbox" />
                        <label htmlFor="customCheckbox1" className={styles.list_item4_label}></label>
                    </div>
                    <div className={styles.break}></div>
                    <div className={styles.sub_content_item}>
                        <ListItem />
                        <input type="checkbox" id="customCheckbox2" className={styles.list_item4} name="myCheckbox" />
                        <label htmlFor="customCheckbox2" className={styles.list_item4_label}></label>
                    </div>
                    <div className={styles.break}></div>
                    <div className={styles.sub_content_item}>
                        <ListItem />
                        <input type="checkbox" id="customCheckbox3" className={styles.list_item4} name="myCheckbox" />
                        <label htmlFor="customCheckbox3" className={styles.list_item4_label}></label>
                    </div>
                </div>
                <div className={styles.content_footer}>
                    <div>Action 1</div>
                    <div>Action 2</div>
                </div>
            </div>
      </section>
    )
}
