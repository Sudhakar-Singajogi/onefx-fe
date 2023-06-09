import { useEffect, useState} from "react";
import { Form, FormGroup } from "react-bootstrap";
import { fetchSuggestedUsers } from "../reducx/slices/SignUpSlice";
import { useSelector, useDispatch } from "react-redux";

function SuggestedUsers({referrer, setReferralId }) { 
  const dispatch = useDispatch();
  const { autosuggestusers } = useSelector((state) => state.signup);
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [selecteduser, setSelecteduser] = useState(referrer)

  const autoSuggestUser = (e) => {
    const enteredEmail = e.target.value;
    const filteredUsers = autosuggestusers.filter(
      (user) => user.email.indexOf(enteredEmail) !== -1
    );
    setSuggestedUsers(filteredUsers);
    setSelecteduser(enteredEmail); 
  };

  useEffect(() => {
    dispatch(fetchSuggestedUsers());
    setSelecteduser(referrer); 
  }, [referrer]);
  
  const setReferrer = (userObject) => {
    setSelecteduser(userObject.email);
    setReferralId(userObject)
    setSuggestedUsers([])
  }
  
  return (
    <>
      <FormGroup>
        <Form.Label>Referrer</Form.Label>
        <Form.Control
          type="text"
          name="referrer"
          placeholder="Select Referrer"
          onChange={(e) => autoSuggestUser(e)} 
          value={selecteduser}
        />
        <ul className="typeahead">
            {
                suggestedUsers.map((user)=>(<li key={user.userId} onClick={()=>setReferrer(user)}>{user.email}</li>))
            }
        </ul>
      </FormGroup>
    </>
  );
}

export default SuggestedUsers;
