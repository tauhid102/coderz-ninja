import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import android from "../../Image/skill/android.svg";
import angular from "../../Image/skill/angular.svg";
import aws from "../../Image/skill/aws.svg";
import azuredevops from "../../Image/skill/azure-devops.svg";
import cplusplus from "../../Image/skill/c-plus-plus.svg";
import csharp from "../../Image/skill/c-sharp.svg";
import css3 from "../../Image/skill/css3.svg";
import git from "../../Image/skill/git.svg";
import cypress from "../../Image/skill/cypress.svg";
import devops from "../../Image/skill/devops.svg";
import django from "../../Image/skill/django.svg";
import docker from "../../Image/skill/docker.svg";
import dotnetcore from "../../Image/skill/dot-net-core.svg";
import dotnetvertical from "../../Image/skill/dot-net-vertical.svg";
import express from "../../Image/skill/express.svg";
import figma from "../../Image/skill/figma.svg";
import firebase from "../../Image/skill/firebase.svg";
import flask from "../../Image/skill/flask.svg";
import flutter from "../../Image/skill/flutter.svg";
import go from "../../Image/skill/go.svg";
import googlecloud from "../../Image/skill/google-cloud.svg";
import html from "../../Image/skill/html.svg";
import ionic from "../../Image/skill/ionic.svg";
import ios from "../../Image/skill/ios.svg";
import java from "../../Image/skill/java.svg";
import javascript from "../../Image/skill/javascript.svg";
import jest from "../../Image/skill/jest.svg";
import json from "../../Image/skill/json.svg";
import kotlin from "../../Image/skill/kotlin.svg";
import laravel from "../../Image/skill/laravel.svg";
import microsoftsqlserver from "../../Image/skill/microsoft-sql-server.svg";
import mongodb from "../../Image/skill/mongodb.svg";
import mysql from "../../Image/skill/mysql.svg";
import next from "../../Image/skill/next.svg";
import nginx from "../../Image/skill/nginx.svg";
import node from "../../Image/skill/node.svg";
import nuxt from "../../Image/skill/nuxt.svg";
import php from "../../Image/skill/php.svg";
import playwright from "../../Image/skill/playwright.svg";
import postgresql from "../../Image/skill/postgresql.svg";
import powerbi from "../../Image/skill/power-bi.svg";
import python from "../../Image/skill/python.svg";
import reactnative from "../../Image/skill/react-native.svg";
import react from "../../Image/skill/react.svg";
import redis from "../../Image/skill/redis.svg";
import redux from "../../Image/skill/redux.svg";
import restapi from "../../Image/skill/rest-api.svg";
import rubyonrails from "../../Image/skill/ruby-on-rails.svg";
import ruby from "../../Image/skill/ruby.svg";
import selenium from "../../Image/skill/selenium.svg";
import shopify from "../../Image/skill/shopify.svg";
import swift from "../../Image/skill/swift.svg";
import tailwindcss from "../../Image/skill/tailwindcss.svg";
import typescript from "../../Image/skill/typescript.svg";
import unity from "../../Image/skill/unity.svg";
import vue from "../../Image/skill/vue.svg";
import wordpress from "../../Image/skill/wordpress.svg";
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
                <div className="col mt-5 d-flex justify-content-center align-items-center ">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={android}
                      width={80}
                      height={80}
                      alt="logo of android"
                      // className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={angular}
                      width={80}
                      height={80}
                      alt="logo of angular"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={aws}
                      width={80}
                      height={80}
                      alt="logo of aws"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={azuredevops}
                      width={80}
                      height={80}
                      alt="logo of azure-devops"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={cplusplus}
                      width={70}
                      height={80}
                      alt="logo of c-plus-plus"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={csharp}
                      width={80}
                      height={80}
                      alt="logo of c-sharp"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={css3}
                      width={80}
                      height={80}
                      alt="logo of css3"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={cypress}
                      width={80}
                      height={80}
                      alt="logo of cypress"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={devops}
                      width={80}
                      height={80}
                      alt="logo of devops"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={django}
                      width={60}
                      height={80}
                      alt="logo of django"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* second slide */}
            <div>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mt-4 text-center">
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={docker}
                      width={80}
                      height={80}
                      alt="logo of docker"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={dotnetcore}
                      width={80}
                      height={80}
                      alt="logo of dot-net-core"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={dotnetvertical}
                      width={80}
                      height={80}
                      alt="logo of dot-net-vertical"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={express}
                      width={80}
                      height={80}
                      alt="logo of express"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={figma}
                      width={80}
                      height={80}
                      alt="logo of figma"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={firebase}
                      width={80}
                      height={80}
                      alt="logo of firebase"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={flask}
                      width={80}
                      height={80}
                      alt="logo of flask"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={flutter}
                      width={80}
                      height={80}
                      alt="logo of flutter"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={git}
                      width={80}
                      height={80}
                      alt="logo of git"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={go}
                      width={80}
                      height={80}
                      alt="logo of go"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Third slide */}
            <div>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mt-4 text-center">
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={googlecloud}
                      width={80}
                      height={80}
                      alt="logo of google-cloud"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={html}
                      width={58}
                      height={80}
                      alt="logo of html"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={ionic}
                      width={80}
                      height={80}
                      alt="logo of ionics"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={ios}
                      width={80}
                      height={80}
                      alt="logo of ios"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={java}
                      width={80}
                      height={80}
                      alt="logo of java"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={javascript}
                      width={80}
                      height={80}
                      alt="logo of javascript"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={jest}
                      width={80}
                      height={80}
                      alt="logo of jest"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={json}
                      width={80}
                      height={80}
                      alt="logo of json"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={kotlin}
                      width={80}
                      height={80}
                      alt="logo of kotlin"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={laravel}
                      width={80}
                      height={80}
                      alt="logo of laravel"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Fourth slide */}
            <div>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mt-4 text-center">
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={microsoftsqlserver}
                      width={80}
                      height={80}
                      alt="logo of microsoft-sql-server"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={mongodb}
                      width={80}
                      height={80}
                      alt="logo of mongodb"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={mysql}
                      width={80}
                      height={80}
                      alt="logo of mysql"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={next}
                      width={80}
                      height={80}
                      alt="logo of next"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={nginx}
                      width={80}
                      height={80}
                      alt="logo of nginx"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={node}
                      width={80}
                      height={80}
                      alt="logo of node"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={nuxt}
                      width={80}
                      height={80}
                      alt="logo of nuxt"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={php}
                      width={80}
                      height={80}
                      alt="logo of php"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={playwright}
                      width={80}
                      height={80}
                      alt="logo of playwright"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={postgresql}
                      width={80}
                      height={80}
                      alt="logo of postgresql"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Fifth slide */}
            <div>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mt-4 text-center">
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={powerbi}
                      width={80}
                      height={80}
                      alt="logo of power-bi"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={python}
                      width={80}
                      height={80}
                      alt="logo of python"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={reactnative}
                      width={80}
                      height={80}
                      alt="logo of react-native"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={react}
                      width={80}
                      height={80}
                      alt="logo of react"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={redis}
                      width={80}
                      height={80}
                      alt="logo of redis"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={redux}
                      width={80}
                      height={80}
                      alt="logo of redux"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={restapi}
                      width={80}
                      height={80}
                      alt="logo of rest-api"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={rubyonrails}
                      width={80}
                      height={80}
                      alt="logo of ruby-on-rails"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={ruby}
                      width={80}
                      height={80}
                      alt="logo of ruby"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={selenium}
                      width={80}
                      height={80}
                      alt="logo of selenium"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Sixth slide */}
            <div>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mt-4 text-center">
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={shopify}
                      width={80}
                      height={80}
                      alt="logo of shopify"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={swift}
                      width={80}
                      height={80}
                      alt="logo of swift"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={tailwindcss}
                      width={80}
                      height={80}
                      alt="logo of tailwindcss"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={typescript}
                      width={80}
                      height={80}
                      alt="logo of typescript"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={unity}
                      width={80}
                      height={80}
                      alt="logo of unity"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={vue}
                      width={80}
                      height={80}
                      alt="logo of vue"
                      className=""
                    />
                  </div>
                </div>
                <div className="col mt-5 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center iconBackground">
                    <img
                      src={wordpress}
                      width={80}
                      height={80}
                      alt="logo of wordpress"
                      className=""
                    />
                  </div>
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
