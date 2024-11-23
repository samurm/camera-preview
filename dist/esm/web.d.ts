import { WebPlugin } from "@capacitor/core";
import type { CameraOpacityOptions, CameraPreviewFlashMode, CameraPreviewOptions, CameraPreviewPictureOptions, CameraPreviewPlugin, CameraSampleOptions } from "./definitions";
export declare class CameraPreviewWeb extends WebPlugin implements CameraPreviewPlugin {
    /**
     *  track which camera is used based on start options
     *  used in capture
     */
    private isBackCamera;
    constructor();
    start(options: CameraPreviewOptions): Promise<{
        depthParamsSupported: boolean;
    }>;
    private stopStream;
    stop(): Promise<any>;
    capture(options: CameraPreviewPictureOptions): Promise<any>;
    captureSample(_options: CameraSampleOptions): Promise<any>;
    stopRecordVideo(): Promise<any>;
    startRecordVideo(_options: CameraPreviewOptions): Promise<any>;
    getSupportedFlashModes(): Promise<{
        result: CameraPreviewFlashMode[];
    }>;
    getHorizontalFov(): Promise<{
        result: any;
    }>;
    setFlashMode(_options: {
        flashMode: CameraPreviewFlashMode | string;
    }): Promise<void>;
    flip(): Promise<{
        depthParamsSupported: boolean;
    }>;
    getSupportedPictureSizes(): Promise<{
        supportedPictureSizes: {
            facing: string;
            supportedPictureSizes: {
                width: number;
                height: number;
            }[];
        }[];
    }>;
    setOpacity(_options: CameraOpacityOptions): Promise<any>;
}
