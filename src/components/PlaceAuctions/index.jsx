import React, { useCallback, useEffect, useRef, useState } from "react";
import InfiniteCalendar, { withRange, Calendar } from "react-infinite-calendar";
import CustomInput from "../utils/CustomInput";
import { Autocomplete } from "@material-ui/lab";
import "react-infinite-calendar/styles.css";
import { Collapse } from "@material-ui/core";
import { categories, location } from "../utils/Searchbar";
import { H2 } from "../Terms";
import AddImages from "../utils/AddImages";

const PlaceAuctions = () => {
  const [open, setOpen] = useState(false);
  const startRef = useRef();
  const [images, setImages] = useState([{}]);
  const endRef = useRef();
  const dateSelect = useCallback(({ start, end }) => {
    startRef.current.value = start.toDateString();
    endRef.current.value = end.toDateString();
  }, []);
  const handleClose = () => setOpen(false);
  const stopPropagation = (e) => e.stopPropagation();
  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => window.removeEventListener("click", handleClose);
  }, []);
  const CalendarWithRange = withRange(Calendar);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <CustomInput className="w-100" label="Auction Title" />
          </div>
          <div className="col-lg-6">
            <CustomInput className="w-100" label="Price" />
          </div>
          <div className="col-lg-6">
            <CustomInput
              ref={startRef}
              defaultValue={new Date().toDateString()}
              readOnly
              onFocus={(e) => {
                setOpen(true);
              }}
              onClick={stopPropagation}
              className="has-val"
              label="Start Date"
            />
          </div>
          <div className="col-lg-6">
            <CustomInput
              ref={endRef}
              className="has-val"
              onClick={stopPropagation}
              onFocus={(e) => {
                setOpen(true);
              }}
              defaultValue={new Date(
                Date.now() + 7 * 24 * 60 * 60 * 1000
              ).toDateString()}
              readOnly
              label="End Date"
            />
          </div>
          <div className="col-12">
            <Collapse onClick={stopPropagation} in={open}>
              <InfiniteCalendar
                Component={CalendarWithRange}
                height={300}
                width={`100%`}
                className="unaffected"
                theme={{
                  weekdayColor: "var(--color-primary)",
                  headerColor: "var(--color-primary-dark)",
                  selectionColor: "var(--color-primary)",
                  todayColor: "var(--color-primary-dark)",
                  accentColor: "var(--color-primary-dark)",
                  floatingNav: {
                    background: "var(--color-primary-dark)",
                    color: "#FFF",
                  },
                }}
                minDate={new Date()}
                selected={{
                  start: new Date(),
                  end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                }}
                onSelect={dateSelect}
                displayOptions={{
                  layout: window.innerWidth > 576 ? "landscape" : "portrait",
                  showTodayHelper: false,
                }}
              />
            </Collapse>
          </div>
          <div className="col-lg-6">
            <CustomInput
              className="w-100"
              component="textarea"
              required
              rows={6}
              label="Message"
            />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-12">
                <Autocomplete
                  id="Countries"
                  options={location}
                  clearOnEscape
                  openOnFocus
                  renderInput={(params) => {
                    return (
                      <div ref={params.InputProps.ref}>
                        <CustomInput {...params.inputProps} label="Countries" />
                      </div>
                    );
                  }}
                />
              </div>
              <div className="col-12">
                <Autocomplete
                  id="Category"
                  options={categories}
                  clearOnEscape
                  openOnFocus
                  renderInput={(params) => {
                    return (
                      <div ref={params.InputProps.ref}>
                        <CustomInput {...params.inputProps} label="Category" />
                      </div>
                    );
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <label className="px-1 mt-3 h6 text-secondary fw-bold" for="upload">
              Ads Photo
            </label>
            <div class="input-group mb-3">
              <input
                type="file"
                class="form-control text-secondary"
                id="upload"
              />
              <label class="input-group-text text-secondary" for="upload">
                Upload
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <H2 variant="h3" className="pt-3 fw-bold">
            Ads Gallery
          </H2>
          <div className="w-100" />
          {images.map((el, i) => (
            <AddImages i={i} setImages={setImages} images={images} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceAuctions;
