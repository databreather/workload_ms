<?php

namespace App\Http\Controllers;

use App\Models\TeachingLoad;
use App\Http\Requests\TeachingLoadRequest;
use App\Http\Resources\TeachingLoadResource;


class TeachingLoadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $loads = TeachingLoadResource::collection(TeachingLoad::latest()->paginate(10));
        return inertia('TeachingLoad/Index', [
            'loads' => $loads,
        ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTeachingLoadRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TeachingLoadRequest $request)
    {
        $attr = $request->toArray();

        TeachingLoad::create($attr);

        return back()->with([
            'type' => 'success',
            'message' => 'Load has been created',
        ]);
    }

    
    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTeachingLoadRequest  $request
     * @param  \App\Models\TeachingLoad  $teachingLoad
     * @return \Illuminate\Http\Response
     */
    public function update(TeachingLoadRequest $request, TeachingLoad $teachingLoad)
    {
        $attr = $request->toArray();

        $teachingLoad->update($attr);

        return back()->with([
            'type' => 'success',
            'message' => 'Load has been updated',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TeachingLoad  $teachingLoad
     * @return \Illuminate\Http\Response
     */
    public function destroy(TeachingLoad $teachingLoad)
    {
        $teachingLoad->delete();

        return back()->with([
            'type' => 'success',
            'message' => 'Load has been deleted',
        ]);
    }
}
