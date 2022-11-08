import { useForm } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'

export default function EditLoad({close, model}) {

    const {data, setData, put, reset, errors} = useForm({ 
        course_name: model.course_name, 
        course_code: model.course_code, 
        nc: model.nc, 
        contact_hours: model.contact_hours, 
        group_size: model.group_size, 
        mgc: model.mgc,
        group_name: model.group_name
    });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        put(route('users.update', model.id), {
            data, 
            onSuccess: () => {
                reset(),
                close()
            }, 
        });
    }

    useEffect(() => {
        setData({...data,
            course_name: model.course_name, 
            course_code: model.course_code, 
            nc: model.nc, 
            contact_hours: model.contact_hours, 
            group_size: model.group_size, 
            mgc: model.mgc,
            group_name: model.group_name
        });
    }, [model]);

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                <div className="form-group">
                            <label htmlFor="course_name" className="col-form-label">Course Name:</label>
                            <input type="text" className="form-control" name='course_name' value={data.course_name} onChange={onChange} id="course_name"/>
                            {errors && <div className='text-danger mt-1'>{errors.course_name}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="course_code" className="col-form-label">Course Code:</label>
                            <input type="text" className="form-control" name='course_code' value={data.course_code} onChange={onChange} id="course_code"/>
                            {errors && <div className='text-danger mt-1'>{errors.course_code}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="nc" className="col-form-label">Novelty of Course:</label>
                            <select className="form-select" name='nc' id='nc' value={data.nc} onChange={onChange} aria-label="Default select example">
                                <option defaultValue="Choose Option">Choose Option</option>
                                <option value="New at Nust">New at Nust</option>
                                <option value="New to Lect">New to Lect</option>
                                <option value="Old">Old</option>
                            </select>
                            {errors && <div className='text-danger mt-1'>{errors.nc}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact_hours" className="col-form-label">Contact Hours:</label>
                            <input type="number" min="0.0" className="form-control" name='contact_hours' value={data.contact_hours} onChange={onChange} id="contact_hours"/>
                            {errors && <div className='text-danger mt-1'>{errors.contact_hours}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="group_size" className="col-form-label">Group Size:</label>
                            <select className="form-select" name='group_size' id='group_size' value={data.group_size} onChange={onChange} aria-label="Default select example" >
                                <option defaultValue="Choose Option">Choose Option</option>
                                <option value="30">30</option>
                                <option value="50">50</option>
                            </select>
                            {errors && <div className='text-danger mt-1'>{errors.group_size}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="mgc" className="col-form-label">Multiple Groups of a Course:</label>
                            <select className="form-select" name='mgc' id='group_size' value={data.mgc} onChange={onChange} aria-label="Default select example">
                                <option defaultValue="Choose Option">Choose Option</option>
                                <option value="One of multiple and Examr">One of multiple and Examr</option>
                                <option value="One of multiple and not Examr">One of multiple and not Examr</option>
                                <option value="The only group">The only group</option>
                                <option value="Two or further group">Two or further group</option>
                            </select>
                            {errors && <div className='text-danger mt-1'>{errors.mgc}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="group_name" className="col-form-label">Group Name:</label>
                            <input type="text" className="form-control" name='group_name' value={data.group_name} onChange={onChange} id="group_name"/>
                            {errors && <div className='text-danger mt-1'>{errors.group_name}</div>}
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn bg-gradient-primary">Update</button>
                </div>
            </form>
        </>

    )
}
