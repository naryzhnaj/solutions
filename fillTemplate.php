<?php
/**
 * формирование и заполнение шаблона.
 *
 * @param array  $obj             массив с данными
 * @param string $apiPathTemplate шаблон строки
 *
 * @return array
 */
function getApiPath(array $obj, string $apiPathTemplate): array
{
    // поля, соответствующие шаблонным строкам
    $fields = array_diff_key(array_keys($obj), ['id']);

    return array_map(function ($field) use ($obj, $apiPathTemplate) {
        return sprintf($apiPathTemplate, $obj['id'], $obj[$field]);
    }, $fields);
}

$template = '/api/items/%d/%s';
$user1 = ['id' => 20, 'type_id' => 'test'];
$user2 = ['id' => 20, 'name' => 'John Dow', 'role' => 'QA', 'salary' => 100];

assert(implode(getApiPath($user1, $template), ', ') === '/api/items/20/test');
assert(implode(getApiPath($user2, $template), ', ') === '/api/items/20/John Dow, /api/items/20/QA, /api/items/20/100');
