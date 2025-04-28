import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "./siedbar.css";

export default function Sidebar(props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (props.show === "show") {
      setVisible(true);
    } else {
      setTimeout(() => setVisible(false), 300);
    }
  }, [props.show]);

  if (!visible) return null;

  return (
    <div className={`sidebar ${props.show === "show" ? "show" : "out"}`}>
      <div className="overlay" onClick={props.notshow} aria-hidden="true"></div>
      <div className="sidebar-container" >
        <div className="close">
          <FontAwesomeIcon
            onClick={props.notshow}
            className="close-icon"
            icon={faClose} style={{ color: "rgb(107 114 128)" }}
          />
        </div>
        <div>
          <p className="sidebar-title">Categories</p>
          <Link
            onClick={props.notshow}
            className="sidebar-link link-page"
            href={"bags"}
          >
            BAGS
          </Link>
          <Link
            onClick={props.notshow}
            className="sidebar-link link-page"
            href={"/shoes"}
          >
            SHOES
          </Link>
          <Link
            onClick={props.notshow}
            className="sidebar-link link-page"
            href={"/clothes"}
          >
            CLOTHES
          </Link>

          <p className="sidebar-title">Pages</p>
          <Link
            onClick={props.notshow}
            className="sidebar-link"
            href={"/shipping-policy"}
          >
            Shipping policy
          </Link>
          <Link
            onClick={props.notshow}
            className="sidebar-link"
            href={"/refund-policy"}
          >
            Refund policy
          </Link>
        </div>
      </div>
    </div>
  );
}
