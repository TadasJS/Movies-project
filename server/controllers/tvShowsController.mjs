import { tvShowModel } from "../models/index.mjs";

const tvShowsController = {
  getTvShows: async (req, res, next) => {
    const tvShow = await tvShowModel.getTvShows();
    try {
      res.status(200).json({
        status: "success",
        message: "Tv shows retrieved successfully",
        data: tvShow,
      });
    } catch (error) {
      next(error);
    }
  },
  getTvShowsById: async (req, res, next) => {
    const { id } = req.params;

    try {
      const getMovie = await tvShowModel.getTvShowsById(id);
      if (!getMovie) {
        return res.status(400).json({
          status: "error",
          message: "Movie not found",
        });
      }
      res.status(200).json({
        status: "success",
        message: "TV show retrieved successfully",
        data: getMovie,
      });
    } catch (error) {
      next(error);
    }
  },
  updateTvShow: async (req, res, next) => {
    const { id } = req.params;
    const {
      title,
      description,
      img_url,
      thumbnail_url,
      year,
      genreid,
      rating,
    } = req.body;
    try {
      const updatedTvShow = await tvShowModel.updateTvShow(id, {
        title,
        description,
        img_url,
        thumbnail_url,
        year,
        genreid,
        rating,
      });

      if (!updatedTvShow) {
        return res.status(404).json({
          status: "error",
          message: "TV show not found",
        });
      }

      res.status(200).json({
        status: "success",
        message: "TV show updated successfully",
        data: updatedTvShow,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default tvShowsController;
