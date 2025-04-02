import { ReactNode, useEffect } from 'react'
import {appStateSlice} from "../redux/appState/appStateSlice";
import {useAppDispatch} from "../redux/store";

type Props = {
  state?: string,
  children: ReactNode;
}

const PageWrapper = (props: Props) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(props.state) {
      dispatch(appStateSlice.actions.setSelectedPage(props.state))
    }

  }, [dispatch, props]);

  return (
    <>{props.children}</>
  )
}

export default PageWrapper;