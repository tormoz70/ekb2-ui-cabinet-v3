
export interface DelayedDelegate {
    (value: string): void;
}


export class DelayedLaunch {
    private timeoutId: NodeJS.Timeout | undefined = undefined;
    private delay: number;
    private delayedDelegate: DelayedDelegate | undefined;

    constructor(delegate: DelayedDelegate, delay: number = 500) {
        this.delayedDelegate = delegate;
        this.delay = delay;
    }

    public runDelayed(value: string): void {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        this.timeoutId = setTimeout(() => {
            if(this.delayedDelegate){
                this.delayedDelegate(value)
            }
        }, this.delay);
    }
}