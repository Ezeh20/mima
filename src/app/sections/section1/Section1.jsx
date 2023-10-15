import ContentContainer from "@/app/components/ContentContainer";
import styles from "./Section1.module.scss";
import SelectInput from "@/app/components/SelectInput";
import { constants } from "./constants";


export const Section1 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.headerContainer}>
        <p className={styles.hide}>ades</p>
        <ContentContainer className={styles.content}>
          <div className={styles.float}>
            {
              constants.map(({ id, icon, readOnly, option, type, placeholder }) => {
                return (
                  <div key={id} className={styles.content}>
                    <SelectInput
                      type={type}
                      options={option}
                      readOnly={readOnly}
                      icon={icon(styles.icon)}
                      placeholder={placeholder}
                    />
                    {id !== 2 ? <div className={styles.line} /> : undefined}
                  </div>
                )
              })
            }
            <button className={styles.button}>Search</button>
          </div>
        </ContentContainer>
      </div>
    </section>
  );
};

/**
 * <SelectInput
              options={option}
              type="date"
              icon={<PiCalendarBlankThin className={styles.icon} />}
              placeholder="Where Are You Going?"
            />
            <SelectInput
              options={option}
              readOnly={true}
              icon={<RiUser3Line className={styles.icon} />}
              placeholder="Where Are You Going?"
            />
 */