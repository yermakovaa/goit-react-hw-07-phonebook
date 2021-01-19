import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import { CSSTransition } from 'react-transition-group';
import popTransition from '../../utils/transitions/pop.module.css';
import s from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);

  return (
    <CSSTransition
      in={contacts.length > 0}
      timeout={250}
      classNames={popTransition}
      mountOnEnter
      unmountOnExit
    >
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={e =>
            dispatch(contactsActions.filterContact(e.target.value))
          }
        />
      </label>
    </CSSTransition>
  );
}

export default Filter;
