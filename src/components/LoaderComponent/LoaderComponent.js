import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './LoaderComponent.module.css';

function LoaderComponent() {
  return (
    <div className={s.overlay}>
      <Loader type="ThreeDots" color="#00BFFF" height="32" />
    </div>
  );
}

export default LoaderComponent;
