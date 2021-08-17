import LoaderMarcup from 'react-loader-spinner';
import style from './Loader.module.css'

const Loader =() => (
    <div className={style.loader}>
        <LoaderMarcup type="Puff" color="#303f9f" height={80} width={80} />
    </div>
);

export default Loader;