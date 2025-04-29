
export interface DelayedDelegate {
    (): void;
}


export class DelayedLaunch {

    private timeoutId: NodeJS.Timeout;

    public runDelayed(delayedDelegate: DelayedDelegate | undefined, delay: number = 500): void {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        this.timeoutId = setTimeout(() => {
            if(delayedDelegate){
                delayedDelegate()
            }
        }, delay);
    }
}