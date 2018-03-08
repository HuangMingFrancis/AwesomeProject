package com.awesomeproject.call_native_components;

import android.graphics.Color;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by Francis on 2018/3/6.
 */

public class TestSimpleViewManager extends SimpleViewManager<MyTextView> {
    private static final String NAME = "MyTextView";
    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected MyTextView createViewInstance(ThemedReactContext reactContext) {
        MyTextView myTextView = new MyTextView(reactContext);
        return myTextView;
    }

    @ReactProp(name="text")
    public void setText(MyTextView myTextView, String text){
        myTextView.setText(text);
    }

    @ReactProp(name="textSize")
    public void setTextSize(MyTextView myTextView, float fontSize){
        myTextView.setTextSize(fontSize);
    }

    @ReactProp(name="textColor",defaultInt = Color.BLACK)
    public void setTextColor(MyTextView myTextView, int textColor){
        myTextView.setTextColor(textColor);
    }
}
