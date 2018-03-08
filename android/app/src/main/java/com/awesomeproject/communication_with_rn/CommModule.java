package com.awesomeproject.communication_with_rn;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by Francis on 2018/3/8.
 * 测试与RN间的通信
 */

public class CommModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext mContext;
    //定义module名字，在getName方法中返回
    private static final String NAME = "commModule";

    //RN DeviceEventEmitter定义监听方法的名字
    private static final String EVENT_NAME = "nativeCallRn";

    public CommModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return NAME;
    }

    //ReactMethod注解定义提供给RN调用的方法，这里简单的弹出一个toast
    @ReactMethod
    public void toast(String message) {
        Toast.makeText(mContext, message, Toast.LENGTH_LONG).show();

        //测试当RN调用的时候直接
        nativeCallRn("i am native");
    }

    //原生调用RN的方法
    public void nativeCallRn(String msg) {
        mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(EVENT_NAME, msg);
    }

    //利用Callback进行回调
    @ReactMethod
    public void rnCallNativeFromCallback(String msg, Callback callback) {
        // 1.处理业务逻辑...
        String result = "处理结果：" + msg;
        // 2.回调RN,即将处理结果返回给RN
        callback.invoke(result);
    }
    //利用Promise进行回调处理
    @ReactMethod
    public void rnCallNativeFromPromise(String msg, Promise promise) {

        // 1.处理业务逻辑...
        String result = "处理结果：" + msg;
        // 2.回调RN,即将处理结果返回给RN
        promise.resolve(result);
    }

    //利用getConstants方法直接提供给原生进行调用
    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map<String,Object> params = new HashMap<>();
        params.put("Constant","我是常量，传递给RN");
        return params;
    }
}
