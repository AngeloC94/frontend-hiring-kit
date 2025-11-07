<?php
namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\RESTful\ResourceController;

class Practice extends ResourceController
{
    protected $format = 'json';
    use ResponseTrait;

    /**
     * Get all practices
     * GET /customer
     */
    public function index(): ResponseInterface
    {
        $practices = $this->readPractice();
        return $this->respond(['payload' => $practices]);
    }

    /**
     * Read practices from file
     */
    private function readPractice(): array
    {
        if (!file_exists(FCPATH . 'data/practices.txt')) {
            return [];
        }

        $content = file_get_contents(FCPATH . 'data/practices.txt');
        $practices = json_decode($content, true);

        return $practices ?? [];
    }
}