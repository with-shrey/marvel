package com.marvell;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;

import com.cunoraz.gifview.library.GifView;
import com.facebook.common.util.UriUtil;

public class SplashActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);
        GifView gifView1 = (GifView) findViewById(R.id.gif1);
        gifView1.setGifResource(R.drawable.splash);
        gifView1.play();
        Intent reactActivityIntent = new Intent(this, MainActivity.class);
        startActivity(reactActivityIntent);
        finish();
    }
}