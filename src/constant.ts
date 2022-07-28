import { utils } from 'xmcommon';
/** 配置输出类型 */
export enum EnumOutType {
    /** 客户端配置 */
    CLIENT = 'c',
    /** 服务端配置 */
    SERVER = 's',
}
/** json基本数据类型 */
export enum EnumDataBaseType {
    /** 未知类型 */
    UNKNOWN = 0,
    /** boolean */
    BOOL = 1,
    /** 整数 */
    INT = 2,
    /** 数字 */
    NUMBER = 3,
    /** 字符串 */
    STRING = 4,
    /** 对象 */
    OBJECT = 5,
    /** 任意类型 */
    ANY = 6,
}
/** 配置数据的类型定义 */
export enum EnumDataType {
    /** 任意类型 */
    ANY = 'any',
    /** boolean */
    BOOL = 'bool',
    /** 整数 */
    INT = 'int',
    /** 数字 */
    NUMBER = 'number',
    /** 字符串 */
    STRING = 'string',
    /** 对象 */
    OBJECT = 'object',

    /** 任意类型数组 */
    ARRAY_ANY = 'array:any',
    /** boolean数组 */
    ARRAY_BOOL = 'array:bool',
    /** 整数数组 */
    ARRAY_INT = 'array:int',
    /** 数字数组 */
    ARRAY_NUMBER = 'array:number',
    /** 字符串数组 */
    ARRAY_STRING = 'array:string',
    /** 对象数组 */
    ARRAY_OBJECT = 'array:object',
}
/** 配置类型集合 */
const TypeSet = {
    SetTypeAny: new Set<EnumDataType>(),
    SetTypeBool: new Set<EnumDataType>(),
    SetTypeInt: new Set<EnumDataType>(),
    SetTypeNumber: new Set<EnumDataType>(),
    SetTypeString: new Set<EnumDataType>(),
    SetTypeObject: new Set<EnumDataType>(),
    SetTypeArray: new Set<EnumDataType>(),
};
// 初始化配置类型集合
TypeSet.SetTypeAny.add(EnumDataType.ANY).add(EnumDataType.ARRAY_ANY);
TypeSet.SetTypeBool.add(EnumDataType.BOOL).add(EnumDataType.ARRAY_BOOL);
TypeSet.SetTypeInt.add(EnumDataType.INT).add(EnumDataType.ARRAY_INT);
TypeSet.SetTypeNumber.add(EnumDataType.NUMBER).add(EnumDataType.ARRAY_NUMBER);
TypeSet.SetTypeString.add(EnumDataType.STRING).add(EnumDataType.ARRAY_STRING);
TypeSet.SetTypeObject.add(EnumDataType.OBJECT).add(EnumDataType.ARRAY_OBJECT);
TypeSet.SetTypeArray.add(EnumDataType.ARRAY_ANY)
    .add(EnumDataType.ARRAY_BOOL)
    .add(EnumDataType.ARRAY_INT)
    .add(EnumDataType.ARRAY_NUMBER)
    .add(EnumDataType.ARRAY_STRING)
    .add(EnumDataType.ARRAY_OBJECT);

/** 配置类型工具 */
export class XTypeUtils {
    /** 检查是否是任意类型 */
    public static isAny(paramType: EnumDataType) {
        return TypeSet.SetTypeAny.has(paramType);
    }

    /** 检查是否是boolean类型 */
    public static isBool(paramType: EnumDataType) {
        return TypeSet.SetTypeBool.has(paramType);
    }

    /** 检查是否是整数类型 */
    public static isInt(paramType: EnumDataType) {
        return TypeSet.SetTypeInt.has(paramType);
    }

    /** 检查是否是数字类型 */
    public static isNumber(paramType: EnumDataType) {
        return TypeSet.SetTypeNumber.has(paramType);
    }

    /** 检查是否是字符串类型 */
    public static isString(paramType: EnumDataType) {
        return TypeSet.SetTypeString.has(paramType);
    }

    /** 检查是否是对象类型 */
    public static isObject(paramType: EnumDataType) {
        return TypeSet.SetTypeObject.has(paramType);
    }

    /** 检查是否是数组类型 */
    public static isArray(paramType: EnumDataType) {
        return TypeSet.SetTypeArray.has(paramType);
    }
    /** 检查数据类型与基础类型是否匹配 */
    public static checkType(paramType: EnumDataBaseType, paramData: any) {
        switch (paramType) {
            case EnumDataBaseType.BOOL:
                return utils.isBoolean(paramData);
            case EnumDataBaseType.INT:
                return utils.isInteger(paramData);
            case EnumDataBaseType.STRING:
                return utils.isString(paramData);
            case EnumDataBaseType.NUMBER:
                return utils.isNumber(paramData);
            case EnumDataBaseType.OBJECT:
                return utils.isObject(paramData);
            case EnumDataBaseType.ANY:
                return true;
            default:
                return false;
        }
    }
    /** 根据配置类型，取基础类型 */
    public static baseType(paramType: EnumDataType): EnumDataBaseType {
        if (this.isAny(paramType)) {
            return EnumDataBaseType.ANY;
        } else if (this.isBool(paramType)) {
            return EnumDataBaseType.BOOL;
        } else if (this.isInt(paramType)) {
            return EnumDataBaseType.INT;
        } else if (this.isString(paramType)) {
            return EnumDataBaseType.STRING;
        } else if (this.isNumber(paramType)) {
            return EnumDataBaseType.NUMBER;
        } else if (this.isObject(paramType)) {
            return EnumDataBaseType.OBJECT;
        }
        return EnumDataBaseType.UNKNOWN;
    }
}

/** 通用正则表达式 */
export const CommonReg = {
    /** YYYY-MM-DD hh:mm:ss 格式的正则表达式 */
    dateTime: /^[1-2]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/,
    /** 货币类正则表达式 */
    curreny: /^[-+]?\d+(?:\.\d{0,4})?$/,
    /** 货币千分位 */
    curreny_thousandth: /^[-+]?\d{1,3}(,\d{3})*(\.\d{0,4})?$/,
    /** YYYY-MM-DD 支持 . - / \ 空格分隔符 格式 */
    baseDate: /^([1-3]\d{3})[./\-\\\ ](0[1-9]|1[0-2])[./\-\\\ ](0[1-9]|[1-2][0-9]|3[0-1])$/,
    /** 范围日期 */
    baseRangeDate:
        /^([1-2]\d{3})[./\-\\\ ](0[1-9]|1[0-2])[./\-\\\ ](0[1-9]|[1-2][0-9]|3[0-1]) ([1-2]\d{3})[./\-\\\ ](0[1-9]|1[0-2])[./\-\\\ ](0[1-9]|[1-2][0-9]|3[0-1])$/,
    /** YYYY-MM-DD 格式的日期正则表达式 */
    simpleDate: /^([1-2]\d{3})(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/,
    /** hh:mm:ss的正则表达式 */
    baseTime: /^([0-1]\d{1}|2[0-3]):([0-5]\d{1}):([0-5]\d{1})$/,
    /** hhmmss的正则表达式 */
    simpleTime: /^([0-1]\d{1}|2[0-3])([0-5]\d{1})([0-5]\d{1})$/,
    /** 仅数字 */
    onlyDigit: /^\d+$/,
    /** 仅小写字母 */
    onlyLowercase: /^[a-z]+$/,
    /** 仅大写字母 */
    onlyCapitalLetter: /^[A-Z]+$/,
    /** 仅大小写字母 */
    onlyLetter: /^[A-Za-z]+$/,
    /** 数字与大小写字母 */
    digitOrLetter: /^[A-Za-z0-9]+$/,
    /** 15位身份证 */
    idNumber15: /^([1-6][1-9]|50)\d{4}\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}$/,
    /** 18位身份证 */
    idNumber18: /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    /** email地址 */
    email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    /** ascii字符 */
    ascii: /^[\x00-\x7F]+$/,
    /** 字母是大写的16进制 */
    uppercaseHEX: /^[A-F0-9]+$/,
    /** 字母是小写的16进制 */
    lowercaseHEX: /^[a-f0-9]+$/,
    /** url */
    url: /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*([\?&]\w+=\w*)*$/,
    /** 整数 */
    integer: /^((0{1})|(-{0,1}[1-9]\d*))$/,
    /** 数字 */
    decimal: /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/,
    /** 中国手机号 xxxxxxxxxxx */
    mobile_cn_none: /^(\+?0?86\-?)?(1\d{10})$/,
    /** 中国手机号 xxx-xxxx-xxxx */
    mobile_cn_344: /^(\+?0?86\-?)?(1\d{2})-(\d{4})-(\d{4})$/,
    /** 中国手机号 xxx-xxx-xxxxx */
    mobile_cn_335: /^(\+?0?86\-?)?(1\d{2})-(\d{3})-(\d{5})$/,
    /** 中国手机号 xxxx-xxxx-xxx */
    mobile_cn_443: /^(\+?0?86\-?)?(1\d{3})-(\d{4})-(\d{3})$/,
    /** 国外手机号 */
    mobile_other: /^([\+\-\d\.]{2,20})$/,
};
