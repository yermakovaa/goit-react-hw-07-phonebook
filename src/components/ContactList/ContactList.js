import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ReactComponent as DeleteIcon } from '../../img/delete.svg';
import s from './ContactList.module.css';
import popTransition from '../../utils/transitions/pop.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  const contacts = useSelector(contactsSelectors.getContacts);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      <CSSTransition
        in={!contacts.length}
        timeout={250}
        classNames={popTransition}
        mountOnEnter
        unmountOnExit
      >
        <p>Your phonebook is empty. Please add contact.</p>
      </CSSTransition>
      <TransitionGroup component="ul" className={s.list}>
        {visibleContacts.map(({ id, name, number }) => (
          <CSSTransition
            key={id}
            timeout={250}
            mountOnEnter
            unmountOnExit
            classNames={popTransition}
          >
            <li className={s.item}>
              <p className={s.info}>
                <b>{name}</b>
                <em>{number}</em>
              </p>
              <button
                className={s.btn}
                type="button"
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
              >
                <DeleteIcon width="26" height="26" />
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}

export default ContactList;
