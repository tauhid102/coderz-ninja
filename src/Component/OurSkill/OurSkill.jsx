import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import android from "../../Image/skill/android.svg"
import angular from "../../Image/skill/angular.svg"
import aws from "../../Image/skill/aws.svg"
import azuredevops from "../../Image/skill/azure-devops.svg"
import cplusplus from "../../Image/skill/c-plus-plus.svg"
import csharp from "../../Image/skill/c-sharp.svg"
import css3 from "../../Image/skill/css3.svg"
import git from "../../Image/skill/git.svg"
import cypress from "../../Image/skill/cypress.svg"
import devops from "../../Image/skill/devops.svg"
import django from "../../Image/skill/django.svg"
import docker from "../../Image/skill/docker.svg"
import dotnetcore from "../../Image/skill/dot-net-core.svg"
import dotnetvertical from "../../Image/skill/dot-net-vertical.svg"
import express from "../../Image/skill/express.svg"
import figma from "../../Image/skill/figma.svg"
import firebase from "../../Image/skill/firebase.svg"
import flask from "../../Image/skill/flask.svg"
import flutter from "../../Image/skill/flutter.svg"
import go from "../../Image/skill/go.svg"
import googlecloud from "../../Image/skill/google-cloud.svg"
import html from "../../Image/skill/html.svg"
import ionic from "../../Image/skill/ionic.svg"
import ios from "../../Image/skill/ios.svg"
import java from "../../Image/skill/java.svg"
import javascript from "../../Image/skill/javascript.svg"
import jest from "../../Image/skill/jest.svg"
import json from "../../Image/skill/json.svg"
import kotlin from "../../Image/skill/kotlin.svg"
import laravel from "../../Image/skill/laravel.svg"
import microsoftsqlserver from "../../Image/skill/microsoft-sql-server.svg"
import mongodb from "../../Image/skill/mongodb.svg"
import mysql from "../../Image/skill/mysql.svg"
import next from "../../Image/skill/next.svg"
import nginx from "../../Image/skill/nginx.svg"
import node from "../../Image/skill/node.svg"
import nuxt from "../../Image/skill/nuxt.svg"
import php from "../../Image/skill/php.svg"
import playwright from "../../Image/skill/playwright.svg"
import postgresql from "../../Image/skill/postgresql.svg"
import powerbi from "../../Image/skill/power-bi.svg"
import python from "../../Image/skill/python.svg"
import reactnative from "../../Image/skill/react-native.svg"
import react from "../../Image/skill/react.svg"
import redis from "../../Image/skill/redis.svg"
import redux from "../../Image/skill/redux.svg"
import restapi from "../../Image/skill/rest-api.svg"
import rubyonrails from "../../Image/skill/ruby-on-rails.svg"
import ruby from "../../Image/skill/ruby.svg"
import selenium from "../../Image/skill/selenium.svg"
import shopify from "../../Image/skill/shopify.svg"
import swift from "../../Image/skill/swift.svg"
import tailwindcss from "../../Image/skill/tailwindcss.svg"
import typescript from "../../Image/skill/typescript.svg"
import unity from "../../Image/skill/unity.svg"
import vue from "../../Image/skill/vue.svg"
import wordpress from "../../Image/skill/wordpress.svg"
const OurSkill = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Initialize the isMobile state on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const skillStyle = {
    width: isMobile ? "95%" : "100%",
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="" style={skillStyle}>
      <div className="container paddingTopBottom ">
        <h2 className="text-center svg-container">Our Skill</h2>
        <div className="">
          <Slider {...settings}>
            {/* first slide */}
            <div>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mt-4 text-center">
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={android}
                    width={100}
                    height={100}
                    alt="logo of android"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={angular}
                    width={100}
                    height={100}
                    alt="logo of angular"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={aws}
                    width={100}
                    height={100}
                    alt="logo of aws"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={azuredevops}
                    width={100}
                    height={100}
                    alt="logo of azure-devops"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={cplusplus}
                    width={100}
                    height={100}
                    alt="logo of c-plus-plus"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={csharp}
                    width={100}
                    height={100}
                    alt="logo of c-sharp"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={css3}
                    width={100}
                    height={100}
                    alt="logo of css3"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={cypress}
                    width={100}
                    height={100}
                    alt="logo of cypress"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={devops}
                    width={100}
                    height={100}
                    alt="logo of devops"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={django}
                    width={100}
                    height={100}
                    alt="logo of django"
                    className="iconBackground"
                  />
                </div>
              </div>
            </div>
            {/* second slide */}
            <div>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mt-4 text-center">
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={docker}
                    width={100}
                    height={100}
                    alt="logo of docker"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={dotnetcore}
                    width={100}
                    height={100}
                    alt="logo of dot-net-core"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={dotnetvertical}
                    width={100}
                    height={100}
                    alt="logo of dot-net-vertical"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={express}
                    width={100}
                    height={100}
                    alt="logo of express"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={figma}
                    width={100}
                    height={100}
                    alt="logo of figma"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={firebase}
                    width={100}
                    height={100}
                    alt="logo of firebase"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={flask}
                    width={100}
                    height={100}
                    alt="logo of flask"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={flutter}
                    width={100}
                    height={100}
                    alt="logo of flutter"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={git}
                    width={100}
                    height={100}
                    alt="logo of git"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={go}
                    width={100}
                    height={100}
                    alt="logo of go"
                    className="iconBackground"
                  />
                </div>
              </div>
            </div>
            {/* Third slide */}
            <div>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mt-4 text-center">
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={googlecloud}
                    width={100}
                    height={100}
                    alt="logo of google-cloud"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={html}
                    width={100}
                    height={100}
                    alt="logo of html"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={ionic}
                    width={100}
                    height={100}
                    alt="logo of ionics"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={ios}
                    width={100}
                    height={100}
                    alt="logo of ios"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={java}
                    width={100}
                    height={100}
                    alt="logo of java"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={javascript}
                    width={100}
                    height={100}
                    alt="logo of javascript"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={jest}
                    width={100}
                    height={100}
                    alt="logo of jest"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={json}
                    width={100}
                    height={100}
                    alt="logo of json"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={kotlin}
                    width={100}
                    height={100}
                    alt="logo of kotlin"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={laravel}
                    width={100}
                    height={100}
                    alt="logo of laravel"
                    className="iconBackground"
                  />
                </div>
              </div>
            </div>
            {/* Fourth slide */}
            <div>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mt-4 text-center">
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={microsoftsqlserver}
                    width={100}
                    height={100}
                    alt="logo of microsoft-sql-server"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={mongodb}
                    width={100}
                    height={100}
                    alt="logo of mongodb"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={mysql}
                    width={100}
                    height={100}
                    alt="logo of mysql"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={next}
                    width={100}
                    height={100}
                    alt="logo of next"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={nginx}
                    width={100}
                    height={100}
                    alt="logo of nginx"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={node}
                    width={100}
                    height={100}
                    alt="logo of node"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={nuxt}
                    width={100}
                    height={100}
                    alt="logo of nuxt"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={php}
                    width={100}
                    height={100}
                    alt="logo of php"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={playwright}
                    width={100}
                    height={100}
                    alt="logo of playwright"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={postgresql}
                    width={100}
                    height={100}
                    alt="logo of postgresql"
                    className="iconBackground"
                  />
                </div>
              </div>
            </div>
            {/* Fifth slide */}
            <div>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mt-4 text-center">
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={powerbi}
                    width={100}
                    height={100}
                    alt="logo of power-bi"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={python}
                    width={100}
                    height={100}
                    alt="logo of python"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={reactnative}
                    width={100}
                    height={100}
                    alt="logo of react-native"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={react}
                    width={100}
                    height={100}
                    alt="logo of react"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={redis}
                    width={100}
                    height={100}
                    alt="logo of redis"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={redux}
                    width={100}
                    height={100}
                    alt="logo of redux"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={restapi}
                    width={100}
                    height={100}
                    alt="logo of rest-api"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={rubyonrails}
                    width={100}
                    height={100}
                    alt="logo of ruby-on-rails"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={ruby}
                    width={100}
                    height={100}
                    alt="logo of ruby"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={selenium}
                    width={100}
                    height={100}
                    alt="logo of selenium"
                    className="iconBackground"
                  />
                </div>
              </div>
            </div>
            {/* Sixth slide */}
            <div>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mt-4 text-center">
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={shopify}
                    width={100}
                    height={100}
                    alt="logo of shopify"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={swift}
                    width={100}
                    height={100}
                    alt="logo of swift"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={tailwindcss}
                    width={100}
                    height={100}
                    alt="logo of tailwindcss"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={typescript}
                    width={100}
                    height={100}
                    alt="logo of typescript"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={unity}
                    width={100}
                    height={100}
                    alt="logo of unity"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={vue}
                    width={100}
                    height={100}
                    alt="logo of vue"
                    className="iconBackground"
                  />
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <img
                    src={wordpress}
                    width={100}
                    height={100}
                    alt="logo of wordpress"
                    className="iconBackground"
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurSkill;
