import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import { motion, AnimatePresence } from 'framer-motion';
import s from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);
  // const animatedStyle = useSpring(config);

  return (
    <>
      {contacts.length > 0 && (
        <AnimatePresence>
          <label className={s.label}>
            <motion.input
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
              className={s.input}
              type="text"
              value={filter}
              onChange={e =>
                dispatch(contactsActions.filterContact(e.target.value))
              }
            />
          </label>
        </AnimatePresence>
      )}
    </>
  );
}

export default Filter;
