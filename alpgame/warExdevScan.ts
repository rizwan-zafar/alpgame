export interface warExdevScan{
    imeiList:{
        imei:string,
        serialNumber:string,
        deviceEligiblity:{
            deviceStatus: 'Eligible' | 'Ineligible',
            deviceStatusMessage: Record<string,any>;
            openOrderDetail: Record<string,any>;
            informationalMessageList:{
                informationalMessages:{
                    message:string;
                    url:string;
                }[];
            };
            managerOverrideRequired:boolean;
            deviceFeeList:{
                fee:{
                    SKUType: string;
                    SKU: string;
                    SKUGroup:string;
                    fee: number;
                }[];
            };
            IsAWREEligible:boolean;

        }
    }[];
    imeiSuffix:string;
    resultMessage:string;
    enableIMEIInput:boolean;
    validateIMEI():void
}