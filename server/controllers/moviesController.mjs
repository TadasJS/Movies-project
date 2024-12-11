import { movieModel } from "../models/index.mjs";

const moviesController = {
  getMovies: async (req, res, next) => {
    const movies = await movieModel.getMovies();
    try {
      res.status(200).json({
        status: "success",
        message: "Movies retrieved successfully",
        data: movies,
      });
    } catch (error) {
      next(error);
    }
  },

  getMoviesById: async (req, res, next) => {
    const { id } = req.params;

    try {
      const getMovie = await movieModel.getMoviesById(id);
      if (!getMovie) {
        return res.status(400).json({
          status: "error",
          message: "Movie not found",
        });
      }
      res.status(200).json({
        status: "success",
        message: "Movie retrieved successfully",
        data: getMovie,
      });
    } catch (error) {
      next(error);
    }
  },
  updateMovie: async (req, res, next) => {
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
      const updatedMovie = await movieModel.updateMovie(id, {
        title,
        description,
        img_url,
        thumbnail_url,
        year,
        genreid,
        rating,
      });

      if (!updatedMovie) {
        return res.status(404).json({
          status: "error",
          message: "Movie not found",
        });
      }

      res.status(200).json({
        status: "success",
        message: "Movie updated successfully",
        data: updatedMovie,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default moviesController;
