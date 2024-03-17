import Listing from '../models/listing.model.js';
import { errorHandler } from '../utils/error.js';

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
 
  const listing = await Listing.findByIdAndDelete(req.params.id);

  if(!listing){
    return next(errorHandler(404, 'Anuncio no encontrado'));
  }
  if(req.user.id !== listing.userRef){
    return next(errorHandler(401, 'Solo puede borrar sus propios anuncios'));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    return res.status(200).json('Anuncio eliminado exitosamente');
  } catch (error) {
    next(error)
  }
}



export const updateListing = async (req, res, next) => {
  const listing = await Listing.findByIdAndUpdate(req.params.id);

  if(!listing){
    return next(errorHandler(404, 'Anuncio no encontrado'));
  }
  if(req.user.id !== listing.userRef){
    return next(errorHandler(401, 'Solo puede actualizar sus propios anuncios'));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );
    return res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};


export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if(!listing){
      return next(errorHandler(404, 'Anuncio no encontrado'));
    }
    return res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
}


export const getListings = async (req, res, next) => {
  try {
    
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex)||0;
    

    

  


    let type = req.query.type;

    if(type===undefined || type ==='all_type'){
      type = {$in: ['sale','rent','season']};
    }


    let type_property = req.query.type_property;

    if(type_property===undefined || type_property ==='all'){
      type_property = {$in: ['dpto','casa','galpon','terreno','local']};
    }

    const searchTerm = req.query.searchTerm || '';

    const sort = req.query.sort || 'createdAt';
    const order = req.query.order || 'desc';



    const listings = await Listing.find({
      name: {$regex: searchTerm, $options: 'i'},
      type,
      type_property

    }).sort({[sort]:order}).limit(limit).skip(startIndex);
    return res.status(200).json(listings);

  } catch (error) {
    next(error);
  }
}