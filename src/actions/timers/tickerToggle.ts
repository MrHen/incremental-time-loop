import tickerStart from "./tickerStart";
import tickerStop from "./tickerStop";

const tickerToggle = (rate?: number) => {
  return (dispatch: any, getState: any) => {
    if (getState().timers.timer) {
      return dispatch(tickerStop());
    }

    return dispatch(tickerStart(rate));
  };
};

export default tickerToggle;
