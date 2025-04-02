import {useState} from "react";
import { LoadingImage, LoadingFlash, LoadingFrameWrapper, LoadingFrameTitle } from './style';

interface LoadingScreenProps {
    loading?: boolean
    renderError?: boolean
    msg?: string
    msgColor?: string
    extraContent?: React.ReactNode
}

const DEFAULT_LOADING_MSG = 'Выполняется загрузка...';
const SHOW_SCREEN_DELAY = 0; // Задержка отображения, чтобы не было морганий при быстрой загрузке

export function LoadingScreen(props: LoadingScreenProps) {
    const {loading, renderError, msg, msgColor, extraContent} = props;
    const [showScreen, setShowScreen] = useState(true);
    return <LoadingFrameWrapper>
            <LoadingImage style={{ transform: renderError ? 'rotate(180deg)' : 'none' }}>
                {loading ? <LoadingFlash /> : null}
            </LoadingImage>
            <LoadingFrameTitle style={{ color: msgColor || '#fec8d8' }}>
                {msg || (loading ? DEFAULT_LOADING_MSG : '')}
                {extraContent}
            </LoadingFrameTitle>
        </LoadingFrameWrapper>
};
