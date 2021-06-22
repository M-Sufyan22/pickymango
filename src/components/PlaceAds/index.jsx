import { Divider, Paper, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useState } from "react";
import { H2 } from "../Terms";
import AddImages from "../utils/AddImages";
import CustomInput from "../utils/CustomInput";
import { categories, location } from "../utils/Searchbar";
const PlaceAds = () => {
  const [images, setImages] = useState([{}]);
  return (
    <div>
      <div className="py-5">
        <div className="container">
          <Paper>
            <Typography className="p-3" variant="h2">
              Please fill below form , to publish your ads
            </Typography>
            <Divider />
            <div className="row mx-0">
              <H2 variant="h3" className="pt-3 fw-bold">
                Ads Informations
              </H2>
              <div className="col-lg-6">
                <CustomInput className="w-100" label="Ads Title" />
              </div>
              <div className="col-lg-6">
                <CustomInput className="w-100" label="Price" />
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
                            <CustomInput
                              {...params.inputProps}
                              label="Countries"
                            />
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
                            <CustomInput
                              {...params.inputProps}
                              label="Category"
                            />
                          </div>
                        );
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <label
                  className="px-1 mt-3 h6 text-secondary fw-bold"
                  for="upload"
                >
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
              <div className="w-100" />
              <H2 variant="h3" className="pt-3 fw-bold">
                Ads Gallery
              </H2>
              <div className="w-100" />
              {images.map((el, i) => (
                <AddImages i={i} setImages={setImages} images={images} />
              ))}
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default PlaceAds;
