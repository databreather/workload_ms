<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeachingLoad extends Model
{
    use HasFactory;

    protected $table="teaching_load";

    protected $fillable = [
        'course_name',
        'course_code',
        'nc',
        'contact_hours',
        'group_size',
        'mgc',
        'group_name'
    ];

    // Get user who owns the loads
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
