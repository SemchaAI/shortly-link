import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ShortlyLink } from "../../api/api";
import { Links } from "../Links/Links";
import styles from "./search.module.css";
import cn from "classnames";

export const Search = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [links, setLinks] = useState({
    ok: undefined,
  });
  const [radioB, setRadioB] = useState(0); //1 2 3

  let searchLink = useRef(undefined);

  const onSubmit = async (data) => {
    searchLink.current = data.link;
    console.log(searchLink);
    setLinks(await ShortlyLink(data.link));
    console.log(links);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(event.currentTarget.value);
    const string = JSON.stringify(event.currentTarget.value);
    if (string.includes("shrtco")) {
      setRadioB(1);
    }
    if (string.includes("9qr")) {
      setRadioB(2);
    }
    if (string.includes("shiny")) {
      setRadioB(3);
    }
  };

  return (
    <section className={styles.sectionTwo}>
      <form className={styles.searchForm} onSubmit={handleSubmit(onSubmit)}>
        {console.log(errors.link)}
        <input
          className={cn(styles.search, {
            [styles.err]: errors.link?.type === "required",
          })}
          placeholder="search here"
          {...register("link", { required: true })}
          aria-invalid={errors.link ? "true" : "false"}
        />
        <input
          className={styles.submit}
          type="submit"
          value="Shorten it!"
        ></input>
        {errors.link && <p className={styles.error}>*Please add link</p>}
      </form>
      {links.ok && (
        <ul className={styles.shortLinks}>
          <li className={styles.shortLink}>
            <div className={styles.currentLink}>{searchLink.current}</div>
            <div className={styles.shortedLink}>
              <p>{links.result.short_link}</p>
              <button
                value={links.result.short_link}
                className={styles.links}
                onClick={clickHandler}
              >
                {radioB === 1 ? (
                  <Links url="#" color="copied" type="squared" text="Copied!" />
                ) : (
                  <Links url="#" color="cyan" type="squared" text="Copy" />
                )}
              </button>
            </div>
          </li>
          <li className={styles.shortLink}>
            <div className={styles.currentLink}>{searchLink.current}</div>
            <div className={styles.shortedLink}>
              <p>{links.result.short_link2}</p>
              <button
                value={links.result.short_link2}
                className={styles.links}
                onClick={clickHandler}
              >
                {radioB === 2 ? (
                  <Links url="#" color="copied" type="squared" text="Copied!" />
                ) : (
                  <Links url="#" color="cyan" type="squared" text="Copy" />
                )}
              </button>
            </div>
          </li>
          <li className={styles.shortLink}>
            <div className={styles.currentLink}>{searchLink.current}</div>
            <div className={styles.shortedLink}>
              <p>{links.result.short_link3}</p>
              <button
                value={links.result.short_link3}
                className={styles.links}
                onClick={clickHandler}
              >
                {radioB === 3 ? (
                  <Links url="#" color="copied" type="squared" text="Copied!" />
                ) : (
                  <Links url="#" color="cyan" type="squared" text="Copy" />
                )}
              </button>
            </div>
          </li>
        </ul>
      )}
      {links.ok === undefined && (
        <ul className={styles.shortLinks}>
          <li className={styles.shortLink}>
            <div className={styles.currentLink}>https://www.example.com/</div>
            <div className={styles.shortedLink}>
              <p>shrtco.de/hi7o6</p>
              <button
                value={`shrtco.de/hi7o6`}
                className={styles.links}
                onClick={clickHandler}
              >
                {radioB === 1 ? (
                  <Links url="#" color="copied" type="squared" text="Copied!" />
                ) : (
                  <Links url="#" color="cyan" type="squared" text="Copy" />
                )}
              </button>
            </div>
          </li>
          <li className={styles.shortLink}>
            <div className={styles.currentLink}>https://www.example.com/</div>
            <div className={styles.shortedLink}>
              <p>9qr.de/hi7o6</p>
              <button
                value={`9qr.de/hi7o6`}
                className={styles.links}
                onClick={clickHandler}
              >
                {radioB === 2 ? (
                  <Links url="#" color="copied" type="squared" text="Copied!" />
                ) : (
                  <Links url="#" color="cyan" type="squared" text="Copy" />
                )}
              </button>
            </div>
          </li>
          <li className={styles.shortLink}>
            <div className={styles.currentLink}>https://www.example.com/</div>
            <div className={styles.shortedLink}>
              <p>shiny.link/hi7o6</p>
              <button
                value={`shiny.link/hi7o6`}
                className={styles.links}
                onClick={clickHandler}
              >
                {radioB === 3 ? (
                  <Links url="#" color="copied" type="squared" text="Copied!" />
                ) : (
                  <Links url="#" color="cyan" type="squared" text="Copy" />
                )}
              </button>
            </div>
          </li>
        </ul>
      )}
    </section>
  );
};
