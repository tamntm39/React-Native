import React from "react";
import useLinkNewTab from "../hooks/useLinkNewTab";

const Blog = () => {
  const { contentRef: demoRef } = useLinkNewTab();
  return  <div className="entry-content" ref={demoRef}>
  <p className="mb-5">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste deleniti
    distinctio ipsa corrupti rerum aliquid soluta commodi, iure doloribus
    obcaecati placeat error porro quidem nulla voluptatum tempore.
    Voluptate, saepe{" "}
    <a
      href="https://google.com"
      className="underline"
    >
      google.com
    </a>
    ?
  </p>
  <p className="mb-5">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste deleniti
    distinctio ipsa{" "}
    <a href="https://google.com" className="underline">
      google.com
    </a>{" "}
    rerum aliquid soluta commodi, iure doloribus obcaecati placeat error
    porro quidem nulla voluptatum tempore. Voluptate, saepe suscipit?
  </p>
  <p className="mb-5">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste deleniti
    distinctio ipsa corrupti rerum aliquid soluta commodi, iure doloribus
    obcaecati{" "}
    <a href="https://google.com" className="underline">
      google.com
    </a>{" "}
    error porro quidem nulla voluptatum tempore. Voluptate, saepe suscipit?
  </p>
</div>;
};

export default Blog;
