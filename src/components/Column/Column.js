import styles from './Column.module.scss';


const Column = ({ title, ...props }) => {
    return (
      <article className={styles.column}>
        <h2 className={styles.title}>
            <span className={styles.icon + ' fa fa-' + props.icon} />
        
            {title}</h2>
      </article>
    );
  };

  export default Column;