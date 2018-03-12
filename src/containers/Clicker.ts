import { connect, Dispatch } from "react-redux";

import { addEnergy } from "../actions";
import Clicker from "../components/Clicker";

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
      onClick: () => {
        dispatch(addEnergy());
      },
  };
};

export default connect(null, mapDispatchToProps)(Clicker);
