import { IValue } from "../models/interfaces/IValue";


export const adjust3dScreenSize = (values: IValue) => {
    let screenPosition, screenScale, screenRotation;

    if (window.innerWidth < 768) {
        //check if array or object
        if (Array.isArray(values.screenPosition)) {
            screenPosition = values.screenPosition;
        } else {
            screenPosition = values.screenPosition.m;
        }
        if (Array.isArray(values.screenScale)) {
            screenScale = values.screenScale;
        } else {
            screenScale = values.screenScale.m;
        }
        if (Array.isArray(values.screenRotation)) {
            screenRotation = values.screenRotation;
        } else {
            screenRotation = values.screenRotation.m;
        }
    } else {
        //check if array or object
        if (Array.isArray(values.screenPosition)) {
            screenPosition = values.screenPosition;
        } else {
            screenPosition = values.screenPosition.d;
        }
        if (Array.isArray(values.screenScale)) {
            screenScale = values.screenScale;
        } else {
            screenScale = values.screenScale.d;
        }
        if (Array.isArray(values.screenRotation)) {
            screenRotation = values.screenRotation;
        } else {
            screenRotation = values.screenRotation.d;
        }
    }

    return { screenPosition, screenScale, screenRotation };
};