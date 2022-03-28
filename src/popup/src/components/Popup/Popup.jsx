import { useFindBlacklistWords } from "../../hooks/useFindBlacklistWords";
import { Collapse } from 'antd';

const { Panel } = Collapse;

import 'antd/dist/antd.css';
import styles from './Popup.module.scss';

const Popup = () => {
  const { pageBlacklist } = useFindBlacklistWords();

  return (
    <div className={styles.popup}>
      <h1 className={styles.popupTitle}>Слава Україні</h1>

      {pageBlacklist.length ?
        <Collapse>
          {pageBlacklist.map((blacklistItem, index) =>
            <Panel header={blacklistItem?.names[0]} key={index}>
              <p>{blacklistItem?.description}</p>
            </Panel>)}
        </Collapse> :
        <h2 className={styles.goodPageText}>На сторінці не знайдено ворожих слів</h2>
      }

      <footer className={styles.footer}>
        <a className={styles.helpLink} target="_blank" href="https://www.comebackalive.in.ua/">Допомогти армії</a>
      </footer>
    </div>
  )
}

export default Popup;
