import React, { ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {setSelectedPage} from "../../redux/_main/faetures/appStateSlice";

type Props = {
  state?: string,
  children: ReactNode;
}

const PageWrapper = (props: Props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if(props.state) {
      dispatch(setSelectedPage(props.state))
    }

  }, [dispatch, props]);

  return (
    <>{props.children}</>
  )
}

export default PageWrapper;